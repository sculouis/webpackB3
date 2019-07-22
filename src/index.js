import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
import 'bootstrap'
import 'bootstrap-select'
//bootstrap 3 datetimepicker沒寫npm所以手動載入
import './style/bootstrap-datetimepicker.css'
import 'moment'
import './common/bootstrap-datetimepicker.min.js'
// for Esun
import './style/icon-style.css'
import './style/form.css'
import './style/main.css'
import './style/index.css'
import './style/myStyle.css'


$(function(){
    var hello = () => 'Hello' 
    console.log(hello())
    $('#datetimepicker1').datetimepicker(
        {
        format: 'YYYY/MM/DD',
        }
    );
})
