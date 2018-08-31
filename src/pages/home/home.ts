import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { isCheckedProperty } from 'ionic-angular/util/util';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }

  //VARIÁVEIS DO SISTEMA
  public quantidade_sanduiche:number;
  public quantidade_suco:number;
  public valor_sanduiche:number = null;
  public valor_sanduiche_calculado:number = null;
  public valor_suco:number = null;
  public valor_suco_calculado:number = null;
  public total:number = null;
  public valorTroco:number = null;
  public valorFornecido:number = null;
  public cucumber: boolean;             //VARIÁVEL QUE CHECA SE A CHECKBOX ESTÁ ATIVA OU NÃO
  public cucumber2: boolean;            //VARIÁVEL QUE CHECA SE A CHECKBOX ESTÁ ATIVA OU NÃO

  showAlert() {
    if(this.cucumber == true){
      const prompt = this.alertCtrl.create({
        title: 'Quantidade',
        message: "Informe a quantidade de sanduíches",
        inputs: [
          {
            name: 'Valor',
            placeholder: 'Quantidade',
            type: 'number'
          },
        ],
        buttons: [
          { 
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
              this.cucumber = null;
            }
          },
          {
            text: 'Pronto',
            handler: data => {
              this.quantidade_sanduiche = data.Valor;
              this.valor_sanduiche_calculado = data.Valor*5;
              console.log(data.Valor*5);
            }
          }
        ]
      });
      prompt.present();
    }else{
      this.quantidade_sanduiche = null;
    }

  }

  calcularSuco() {
    if(this.cucumber2 == true){
      const prompt = this.alertCtrl.create({
        title: 'Quantidade',
        message: "Informe a quantidade de sucos",
        inputs: [
          {
            name: 'Valor',
            placeholder: 'Quantidade',
            type: 'number'
          },
        ],
        buttons: [
          { 
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
              this.cucumber2 = null;
            }
          },
          {
            text: 'Pronto',
            handler: data => {
              this.quantidade_suco = data.Valor;
              this.valor_suco_calculado = data.Valor*5;
              console.log(data.Valor*5);
            }
          }
        ]
      });
      prompt.present();
    }else{
      this.quantidade_suco = null;
    }
  }

  valorInvalido() {
    const alert = this.alertCtrl.create({
      title: 'Valor inválido!',
      subTitle: 'Atenção, o valor fornecido é menor do que o que foi cobrado.',
      buttons: ['OK']
    });
    alert.present();
  }

  calcular(){
    const x:number = this.valor_sanduiche_calculado + this.valor_suco_calculado;
    this.total = x;

    if(this.valorFornecido < x && this.valorFornecido != null){
      this.valorInvalido();
    }else if(this.valorFornecido > 0){
      this.valorTroco = this.valorFornecido - x;
    }
  }  

  apagarValores(){
    this.valorTroco = null;
    this.valor_suco_calculado = null;
    this.valor_sanduiche_calculado = null;
    this.total = null;
    this.cucumber = null;
    this.cucumber2 = null;
  }

}




