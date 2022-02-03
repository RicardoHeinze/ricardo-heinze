import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Types }  from 'src/app/models/Types';

@Component({
  selector: 'rhz-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.less']
})
export class PortfolioSectionComponent implements OnInit {
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="arrow arrow-previous"></i>', '<i class="arrow arrow-next"></i>'],
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    },
    nav: true
  };

  carouselItems: Array<Types.CarouselItem> = [];
  currentHoverSlide: number;

  constructor() { }

  ngOnInit(): void {
    this.setCarouselItems();
  }

  setCarouselItems(): void {
    this.carouselItems.push(new Types.CarouselItem(0, 'Backoffice Orbitall', 'backoffice_orbitall.webp'));
    this.carouselItems.push(new Types.CarouselItem(1, 'App Orbitall', 'app_orbitall.webp'));
    this.carouselItems.push(new Types.CarouselItem(2, 'App AbasteceAi PJ', 'app_abasteceai_pj.webp'));
    this.carouselItems.push(new Types.CarouselItem(3, 'App Bib Bahamas', 'app_bib_bahamas.webp'));
    this.carouselItems.push(new Types.CarouselItem(4, 'App Fidiscard', 'app_fidiscard.webp'));
    this.carouselItems.push(new Types.CarouselItem(5, 'MarketUP', 'marketup.webp','https://marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(6, 'Bradesco Gestão Mei', 'gestao_mei.webp', 'https://gestaomei.com.br/'));
    this.carouselItems.push(new Types.CarouselItem(7, 'MarketUP Compras', 'marketplace.webp', 'https://compras.marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(8, 'MarketUP ERP', 'marketup_erp.webp', 'https://marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(9, 'Drogaria Carrefour POS', 'marketup_pos_carrefour.webp', 'https://marketup.com/recursos/pdv'));
    this.carouselItems.push(new Types.CarouselItem(10, 'Santander Gestão Empresarial Digital', 'marketup_santander.webp', 'https://www.santander.com.br/copiloto'));
    this.carouselItems.push(new Types.CarouselItem(11, 'MarketUP Blog', 'marketup_blog.webp', 'https://marketup.com/blog/'));
    this.carouselItems.push(new Types.CarouselItem(12, 'Pókemon Trading Card Game', 'pokemon_trading_card_game.webp', 'http://www.pokemon-tcg.com.br.s3-website-us-east-1.amazonaws.com/'));
  }

}
