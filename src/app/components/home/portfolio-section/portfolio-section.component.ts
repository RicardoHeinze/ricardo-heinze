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
  currentHoverSlide: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.setCarouselItems();
  }

  setCarouselItems(): void {
    this.carouselItems.push(new Types.CarouselItem(0, 'MarketUP', 'marketup.png','https://marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(1, 'Bradesco Gestão Mei', 'gestao_mei.png', 'https://gestaomei.com.br/'));
    this.carouselItems.push(new Types.CarouselItem(2, 'MarketUP Compras', 'marketplace.png', 'https://compras.marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(3, 'MarketUP ERP', 'marketup_erp.png', 'https://marketup.com'));
    this.carouselItems.push(new Types.CarouselItem(4, 'Drogaria Carrefour POS', 'marketup_pos_carrefour.png', 'https://marketup.com/recursos/pdv'));
    this.carouselItems.push(new Types.CarouselItem(5, 'Santander Gestão Empresarial Digital', 'marketup_santander.png', 'https://www.santander.com.br/copiloto'));
    this.carouselItems.push(new Types.CarouselItem(6, 'MarketUP Blog', 'marketup_blog.png', 'https://marketup.com/blog/'));
  }

}
