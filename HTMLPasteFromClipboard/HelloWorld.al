// Welcome to your new AL extension.
// Remember that object names and IDs should be unique across all extensions.
// AL snippets start with t*, like tpageext - give them a try and happy coding!

pageextension 50100 CustomerListExt extends "Customer List"
{
    layout
    {
        addbefore("Power BI Report FactBox")
        {
            part(HTMLEditor; "Cust. List FB")
            {

            }
        }
    }
}
page 50101 "Cust. List FB"
{
    PageType = CardPart;

    layout
    {
        area(Content)
        {
            usercontrol(HTMLEditor; HTMLEditor)
            {
                trigger OnAddInReady()
                begin
                    Message('Controladdin ready!');
                end;

                trigger OnImageInsert()
                begin
                    Message('Image inserted');
                end;
            }
        }
    }

}