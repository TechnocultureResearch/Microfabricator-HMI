import QtQuick 2.0
import QtQuick.Controls 2.12

Item {
    // PUBLIC INTERFACE
    signal expose
    signal exposureComplete
    signal openTray

    readonly property alias statusHeight: baseRect.height
    property alias state: _root.state

    // PRIVATE
    id: _root
    property alias _color: baseRect.color
    property alias _text: statusText.text
    property alias _text_color: statusText.color
    // =============================================================================================


    // INITIALIZATION
    state: "waitingForChecks"
    UIStyle { id: style }

    // COMPONENTS
    Rectangle {
        id: baseRect
        height: 42; width: 644
        anchors.centerIn: parent
        border.color: style.black
        border.width: 1
    }

    Text {
        id: statusText
        anchors.centerIn: baseRect
        font { pixelSize: 18; family: "Helvetica" }
    }
    // =============================================================================================

    CheckBox {
        id: fan
        text: "Fan"
        checked: true
        anchors.right: baseRect.left
        anchors.verticalCenter: baseRect.verticalCenter
        onCheckStateChanged: { uvController.fanState = checked }
    }
    CheckBox {
        text: "Mode"
        checked: true
        anchors.right: baseRect.left
        anchors.bottom: fan.top
        onCheckStateChanged: {
            if(checked){
                sensorController.mode = "VIBRATION_SENSOR"
            } else {
                sensorController.mode = "LIGHT_SENSOR"
            }
        }
    }

    // INTERACTIONS
    property int _stateIndex: 0
    MouseArea {
        anchors.fill: baseRect
        onClicked: {
            _stateIndex++;
            switch(_stateIndex % 5){
            case 0: _root.state = 'waitingForChecks';    break;
            case 1: _root.state = 'readyToExpose';       break;
            case 2: _root.state = 'pauseExposure';
                expose(); break;
            case 3: _root.state = 'openTray';
                exposureComplete(); break;
            case 4: _root.state = 'closeTray';
                openTray(); break;
            } //    console.log("stateIndex(" + _stateIndex%4 + ") -> " + root.state)
        }
    }

    // STATE
    states: [
        State { name: "waitingForChecks";
            PropertyChanges { target: _root; _color: style.black; _text_color: style.white; _text: "Waiting for checks" } },
        State { name: "readyToExpose";
            PropertyChanges { target: _root; _color: style.green; _text: "Ready to expose" } },
        State { name: "pauseExposure";
            PropertyChanges { target: _root; _color: style.black; _text_color: style.white; _text: "Pause the exposure" } },
        State { name: "openTray";
			PropertyChanges { target: _root; _color: style.green;  _text: "Open Tray" } },
        State { name: "closeTray";
			PropertyChanges { target: _root; _color: style.green;  _text: "Close Tray" } }
    ]
    // =============================================================================================

    transitions: [
        Transition { ColorAnimation { duration: 500; easing.type: Easing.InOutExpo }}
    ]
}

