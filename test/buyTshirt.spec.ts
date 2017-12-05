import { $, browser } from 'protractor';
import { MenuContentPage,
  ProductListPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentStepPage,
  OrderResumePage
 } from '../src/page';

describe('Buy a t-shirt', () => {
 const menuContentPage: MenuContentPage = new MenuContentPage();
 const productListPage: ProductListPage = new ProductListPage();
 const productDetailPage: ProductDetailPage = new ProductDetailPage();
 const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
 const summaryStepPage: SummaryStepPage = new SummaryStepPage();
 const signInStepPage: SignInStepPage = new SignInStepPage();
 const addressStepPage: AddressStepPage = new AddressStepPage();
 const shippingStepPage: ShippingStepPage = new ShippingStepPage();
 const paymentStepPage: PaymentStepPage = new PaymentStepPage();
 const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();
 const orderResumePage: OrderResumePage = new OrderResumePage();

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToShirtMenu();
    await productListPage.goToShirtDetailsMenu();
    await productDetailPage.goToCartMenu();
    await productAddedModalPage.goToSummary();
    await summaryStepPage.goToSiginMenu();
    await signInStepPage.fillSignInForm('aperdomobo@gmail.com', 'WorkshopProtractor');
    await signInStepPage.goToAddressesMenu();
    await addressStepPage.goToShippingMenu();
    await shippingStepPage.agreeTermsOfService();
    await shippingStepPage.goToPaymentMenu();
    await paymentStepPage.goToBankPaymentMenu();
    await bankPaymentStepPage.goToOrderMenu();
 
    await expect(orderResumePage.getOrderStatus.getText())
      .toBe('Your order on My Store is complete.');
  });
 });
