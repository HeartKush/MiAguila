import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  sidebarExpanded:boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('sidebar-widget')
    var items = document.querySelectorAll('.nav-pills li a');
    items.forEach((item)=>{
        if ( item.getAttribute('data-current-item') == document.URL.replace('http://localhost:4200/','')){
            item.classList.add("active-item");
            item.classList.remove("link-dark");        
        }else{
          item.classList.remove("active-item");
          item.classList.add("link-dark"); 
        }
    });
  }

  sidebarCollapse(){
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
