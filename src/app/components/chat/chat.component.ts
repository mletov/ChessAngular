import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SignalRService } from 'src/app/services/signal-r.service';

//import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {



  constructor(public signalRService: SignalRService) { }



  ngOnInit(): void {

    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();

  }

}
