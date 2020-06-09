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
  currentHoverSlide: number = null;

  constructor() { }

  ngOnInit(): void {
    this.setCarouselItems();
  }

  setCarouselItems(): void {
    this.carouselItems.push(new Types.CarouselItem(0, 'MarketUP', 'marketup.png'));
    this.carouselItems.push(new Types.CarouselItem(1, 'Gestão Mei', 'gestao_mei.png'));
    this.carouselItems.push(new Types.CarouselItem(2, 'MarketUP Compras', 'marketplace.png'));
    this.carouselItems.push(new Types.CarouselItem(3, 'MarketUP ERP', 'marketup_erp.png'));
    this.carouselItems.push(new Types.CarouselItem(4, 'Drogaria Carrefour POS', 'marketup_pos_carrefour.png'));
    this.carouselItems.push(new Types.CarouselItem(5, 'Santander Gestão Empresarial Digital', 'marketup_santander.png'));
    this.carouselItems.push(new Types.CarouselItem(6, 'MarketUP Blog', 'marketup_blog.png'));
  }

}
