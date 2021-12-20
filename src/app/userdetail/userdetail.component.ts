import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import { Location } from '@angular/common'
import { DetailService } from '../domain/service/detail.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  isDetail: boolean = false;

  login!: string | null;

  userDetail$: any;

  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in nisi ac nisi cursus accumsan. Aliquam euismod vel dui vel viverra. Cras vitae ultricies erat, a cursus sem. Praesent et euismod nulla.`;

  constructor(private activatedRoute: ActivatedRoute, private detailService: DetailService, private location: Location) {
  }

  ngOnInit(): void {

    this.login = this.activatedRoute.snapshot.paramMap.get('login');

    console.log('login UserdetailComponent ' + this.login);

    this.detailService.getDetailUser(this.login)
      .pipe(
        tap(console.warn)
      )
      .subscribe(data => {
        this.userDetail$ = data;
        this.isDetail = true;
      })


  }

  goBack() {

    this.location.back();

  }

}
