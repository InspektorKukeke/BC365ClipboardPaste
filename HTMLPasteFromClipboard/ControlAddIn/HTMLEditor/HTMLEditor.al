controladdin "HTMLEditor"
{
    /*VerticalStretch = true;
    HorizontalStretch = true;*/
    VerticalShrink = true;
    HorizontalShrink = true;

    RequestedHeight = 600;

    RequestedWidth = 300;

    Scripts = 'ControlAddIn/HTMLEditor/Script/jquery-1.12.js',
            'ControlAddIn/HTMLEditor/Script/HTMLEditor.js',
            'ControlAddIn/HTMLEditor/Script/PasteImagesFromClipboard.js';

    StartupScript = 'ControlAddIn/HTMLEditor/Script/start.js';

    event OnAddInReady();

    event OnImageInsert();

}