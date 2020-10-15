import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTrackListingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getAlbum().subscribe(response => this.albumInfo = response);
  }

}
