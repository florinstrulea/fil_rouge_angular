import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChosenPlayer } from 'src/app/interfaces/chosen-player';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() heroId?: string;
  @Input() listPhotos: any;

  modalForm = new FormGroup({
    playerName: new FormControl('', [Validators.required]),
  });

  constructor(private choosePlayerService: ChoosePlayerService, private router: Router) { }
  battleDTO: any = {
    monsterDTO: {},
    playerDTO: {}
  };
  ngOnInit(): void {
  }

  onSubmit() {
    let player: ChosenPlayer = {} as ChosenPlayer;
    player.id = this.heroId!;
    player.playerName = this.modalForm.value.playerName!

    this.choosePlayerService.choosePlayer(player).subscribe(res => {
      if (res) {

        for (let photo of this.listPhotos) {
          if (photo.id == this.heroId) {
            sessionStorage.setItem('photoHeroUrl', photo.link)
          }
        }
        this.modalForm.reset();
        this.router.navigateByUrl("game/main-page")

      }
    })



  }

}
