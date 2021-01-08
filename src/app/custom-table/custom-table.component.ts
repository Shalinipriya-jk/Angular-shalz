import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {


  edit_row(no) {
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
     
    let name=document.getElementById("name_row"+no);
    let country=document.getElementById("country_row"+no);
    let age=document.getElementById("age_row"+no);
     
    let name_data=name.innerHTML;
    let country_data=country.innerHTML;
    let age_data=age.innerHTML;
     
    name.innerHTML= `<input type='text' id='name_text${no}' value='${name_data}'>`;
    country.innerHTML=`<input type='text' id='country_text${no}' value='${country_data}'>`;
    age.innerHTML=`<input type='text' id='age_text${no}' value='${age_data}'>`;
  }
  
  save_row(no)
  {
   let name_val=(<HTMLInputElement>document.getElementById("name_text"+no)).value;
   let country_val=( <HTMLInputElement>document.getElementById("country_text"+no)).value;
   let age_val=(<HTMLInputElement>document.getElementById("age_text"+no)).value;
  
   document.getElementById("name_row"+no).innerHTML=name_val;
   document.getElementById("country_row"+no).innerHTML=country_val;
   document.getElementById("age_row"+no).innerHTML=age_val;
  
   document.getElementById("edit_button"+no).style.display="block";
   document.getElementById("save_button"+no).style.display="none";
  }

  Delete_row(num) {
      document.getElementById("Row"+num).outerHTML ="";
  }

  add_row(){
//  let new_name=(<HTMLInputElement>document.getElementById("new_name")).value;
//  let new_country=(<HTMLInputElement>document.getElementById("new_country")).value;
//  let new_age=(<HTMLInputElement>document.getElementById("new_age")).value;
	
//  let table=(<HTMLTableElement>document.getElementById("data_table"));
//  let table_len=(table.rows.length)-1;
//  let row = table.insertRow(table_len).outerHTML="<div id='row"+table_len+"'><p id='name_row"+table_len+"'>"+new_name+"</p><p id='country_row"+table_len+"'>"+new_country+"</p><p id='age_row"+table_len+"'>"+new_age+"</p><p <input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></p></div>";

//  (<HTMLInputElement>document.getElementById("new_name")).value="";
//  (<HTMLInputElement>document.getElementById("new_country")).value="";
//  (<HTMLInputElement>document.getElementById("new_age")).value="";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
