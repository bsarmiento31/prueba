import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UsuariosService } from '../../services/usuarios.service';
import * as $ from 'jquery';
import Swal from'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public title:string; 
	public user:User;
	public status:string;
	titularAlerta:string = 'Registro'; 

  constructor(private _route: ActivatedRoute,private _router: Router,private _userService: UsuariosService) {

	this.user = new User(1,'','','','');
   }

  ngOnInit() {

  	 $(document).ready(function(){
         $('.gallery1 ul li a').click(function() {
		     var itemID = $(this).attr('href');
		     $('.gallery1 ul').addClass('item_open');
		     $(itemID).addClass('item_open');
		     return false;
		 }); 
		 $('.close').click(function() {
		     $('.port, .gallery ul').removeClass('item_open');
		     return false;
		 });

		 // $(".gallery1 ul li a").click(function() {
		 //     $('html, body').animate({
		 //         scrollTop: parseInt($("#top").offset().top)
		 //     }, 400);
		 // });
    });
  }

  onSubmit(form){
	// console.log(this.user);

	Swal.fire('Registro exitoso...', this.titularAlerta, 'success');

	form.reset();
		
  }




}
