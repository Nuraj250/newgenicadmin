export class Order {
  orderId: number;
  orderDate: string;
  orderTime: string;
  totalWeight: number;
  trackingNumber: string;
  pickUpDate: string;
  pickUpTime: string;
  user: [{
    userId: number;
    firstName: string;
    lastName: string;
    profilePicture: object;
    gmail: string;
    mobile: string;
    dob: string;
    username: string;
  }];
  delivery: [{
    deliveryId: 99,
    name: string;
    address: string;
    gmail: string;
    mobile: string;
    registrationDate: string;
    registrationTime: string;
    website: string;
    registrationNumber: string;
    active: true,
    deliveryCostLis: [{
      deliveryCostId: 111,
      district: string;
      cost: 550,
      costPerExtra: 100
    }];
    shippingDetails: [{
      userAddressId: 11,
      firstName: string;
      lastName: string;
      address: string;
      district: string;
      city: string;
      mobile: string;
      postalCode: string;
    }];
    billingDetails: [{
      userAddressId: 11,
      firstName: string;
      lastName: string;
      address: string;
      district: string;
      city: string;
      mobile: string;
      postalCode: string;
    }];
    orderProductList: [{
      productId: 120,
      productCode: string;
      name: string;
      description: string;
      color: string;
      stock: 50,
      size: string;
      gender: string;
      weight: 150,
      sale_price: 750,
      retail_price: 650,
      isFreeShipping: boolean;
      discount: 14,
      qty: 2,
      productOrderPrice: 1300
    }];
    orderPayment: {
      paymentId: 11,
      orderPrice: 5600,
      deliveryPrice: 440,
      freeDeliveryPrice: 0,
      discountPrice: 0,
      refund: 0,
      reorder: 0,
      paymentDate: string;
      paymentTime: string;
    }
  }];
}
