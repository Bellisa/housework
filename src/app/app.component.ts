import { Component } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'node-express-angular';
  status = 'DOWN';
  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService
      .getStatus().subscribe((result: any) => {
        console.log('result', result)
        this.status = result.status;
      });
  }
}
