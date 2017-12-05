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

 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToShirtDetailsMenu();
    await(browser.sleep(3000));
    await productDetailPage.goToCartMenu();
    await(browser.sleep(3000));
    await productAddedModalPage.goToSummary();
    await(browser.sleep(3000));
    await summaryStepPage.goToSiginMenu();
    await(browser.sleep(3000));
    await signInStepPage.goToAddressesMenu();
    await(browser.sleep(3000));
    await addressStepPage.goToShippingMenu();
    await(browser.sleep(3000));
    await shippingStepPage.agreeTermsOfService();
    await(browser.sleep(3000));
    await shippingStepPage.goToPaymentMenu();
    await(browser.sleep(3000));
    await paymentStepPage.goToBankPaymentMenu();
    await(browser.sleep(3000));
    await bankPaymentStepPage.goToOrderMenu();
    await(browser.sleep(3000));
 
    await expect(orderResumePage.getOrderStatus.getText())
      .toBe('Your order on My Store is complete.');
  });
 });
