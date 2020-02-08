import QtQuick 2.0
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12
import "../"
import "../../"

Item {
    id: _root

    Rectangle {
        id: baseRect
        anchors.fill: _root
        color: Style.black
    }

    ColumnLayout {
        anchors.horizontalCenter: baseRect.horizontalCenter
        anchors.bottom: baseRect.bottom
        anchors.bottomMargin: 10

        Image {
            id: illustration
            Layout.preferredWidth: 200
            Layout.preferredHeight: 150
            fillMode: Image.PreserveAspectCrop
            source: "Assets/microfabricator.png"
        }

        IconButton { icon: "Down"; buttonText: "Toggle Wafer Clamp"; action: "";
            canToggle: true
            onClicked: { uvController.pumpState = checked }
        }
        IconButton { buttonText: "Wafer is Placed" }
    }
}
