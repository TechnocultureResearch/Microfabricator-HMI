import QtQuick 2.0
import QtQuick.Controls 2.12
import QtCharts 2.3
import QtQuick.Layouts 1.12
import "../"
import "../../"
import "../../vendor"

Item {
    id: _root
    property color bgColor: Style.black
    property color textColor_Values: Style.green
    property color textColor_Titles: "gainsboro"
    property int fontSize_Values: 14
    property int fontSize_Titles: 11

    FontAwesome { id: icons; resource: "http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/fonts/fontawesome-webfont.ttf" }

    Rectangle {
        id: baseRect
        anchors.fill: _root
        color: bgColor
    }

    ColumnLayout {
        anchors.horizontalCenter: baseRect.horizontalCenter
        anchors.bottom: baseRect.bottom
        anchors.bottomMargin: 20

        Rectangle {
            Layout.preferredWidth: 200
            Layout.preferredHeight: 95
            color: "white"
            opacity: 0.1
        }

        RowLayout {
            spacing: 15
            Text {
                text: icons.icons.fa_check_circle_o
                font.family: icons.family
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
            Text {
                text: "Critical\u0394"
                color: textColor_Titles
                font.pointSize: fontSize_Titles
            }
            Text {
                text: "\u00b1 2%"
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
        }
        RowLayout {
            spacing: 15
            Text {
                text: icons.icons.fa_check_circle_o
                font.family: icons.family
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
            Text {
                text: "Subcritical\u0394"
                color: textColor_Titles
                font.pointSize: fontSize_Titles
            }
            Text {
                text: "\u00b1 1%"
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
        }

        RowLayout {
            spacing: 15
            Text {
                text: icons.icons.fa_check_circle_o
                font.family: icons.family
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
            Text {
                text: "Dominant\u0394"
                color: textColor_Titles
                font.pointSize: fontSize_Titles
            }
            Text {
                text: "\u00b1 1%"
                color: textColor_Values
                font.pointSize: fontSize_Values
            }
        }

        RoundButton {
            id: doneButton
            text: icons.icons.fa_check_circle + " Light Engine is OK"
            font.family: icons.family
            Layout.preferredWidth: 200
            Layout.preferredHeight: 30

            onClicked: { checksModel.set(globalCurrentIndex, {"status" : "ok"}) }
        }
    }
}
