import { Component, OnInit } from '@angular/core'
import { SegmentService } from 'ngx-segment-analytics'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent implements OnInit {
  public products = [
    { id:'1', name: 'Switch', price: '$399'},
    { id:'2', name: 'Xbox', price: '$599'},
    { id:'3', name: 'PS5', price: '$699'}
  ]
  constructor(private segment: SegmentService) {}

  ngOnInit(): void {
    this.segment.page().then(() => console.log('Page sent'))
  }

  sendTrack(planType: string): void {
    console.log('Track sent', planType)
    this.segment.track('User Registered', {
      plan: planType
    })
  }

  buyProduct(id: any) {
    const product = this.products.find(p => p.id === id)
    this.segment.track('Product bought', {
      id: product?.id,
      name: product?.name,
      price: product?.price,
    })
    console.log('Track of product sent')
  }
}
