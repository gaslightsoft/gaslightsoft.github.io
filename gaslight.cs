// C# Document
using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace gaslight
{
    public class Home : Page
    {
        public string sex = "male";
        protected void Page_Load(object sender, EventArgs e)
        {
            sex = "male";
        }
        public string _init()
        {
           return sex;
        }
        public void _iBrowser()
        {

        }
    }
}