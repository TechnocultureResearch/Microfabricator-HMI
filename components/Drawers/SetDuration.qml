import QtQuick 2.0
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12
import "../"
import "../../"

Item {
    id: _root
    property int durationSeconds: { minSlider.value*60 + secSlider.value }

    Rectangle {
        id: baseRect
        anchors.fill: _root
        color: style.black
    }

    UIStyle { id: style }

    ColumnLayout {
        anchors.horizontalCenter: baseRect.horizontalCenter
        anchors.bottom: baseRect.bottom
        anchors.bottomMargin: 20

        Text {
            id: element
            text: { printTime(_root.durationSeconds) }
            font.pixelSize: 60
            font.weight: Font.ExtraLight
            color: style.white
        }

        Slider {
            id: minSlider
            to: 19; value: {(exposureDuration / 60).toFixed(0)}
            stepSize: 1
        }

        Slider {
            id: secSlider
            to: 59; value: {exposureDuration % 60}
            stepSize: 5
        }

        RoundButton {
            id: doneButton
            text: "\u2714 " + "Done"
            Layout.preferredWidth: 200
            Layout.preferredHeight: 30
            enabled: {
                if(durationSeconds < 1){ false }
                else { true }
            }
            onClicked: {
                checksModel.set(globalCurrentIndex, {"status" : "ok"})
                exposureDuration = _root.durationSeconds
            }
        }
    }
}
