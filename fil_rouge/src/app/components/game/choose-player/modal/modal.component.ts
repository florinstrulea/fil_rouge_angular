import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChosenPlayer } from 'src/app/interfaces/chosen-player';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() playerId?: string;

  modalForm = new FormGroup({
    playerName: new FormControl('', [Validators.required]),
  });

  constructor(private choosePlayerService: ChoosePlayerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let player: ChosenPlayer = {} as ChosenPlayer;
    player.id = this.playerId!;
    player.playerName = this.modalForm.value.playerName!
    this.choosePlayerService.choosePlayer(player).subscribe(res => {
      if (res) {
        console.log(res);
        this.choosePlayerService.adversaries.next(res);
      }
    })



  }

}
