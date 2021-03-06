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

  describe('Given a clothing website', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('When the user chooses a T-shirt from the catalog', () => {
      beforeAll(async () => {
        await menuContentPage.goToShirtMenu();
        await productListPage.goToShirtDetailsMenu('Faded Short Sleeve T-shirts');
        await productDetailPage.goToCartMenu();
        await productAddedModalPage.goToSummary();
        await summaryStepPage.goToSiginMenu();
      });

      describe('And logs in with his account', () => {
        beforeAll(async () => {
          await signInStepPage.fillSignInForm('aperdomobo@gmail.com', 'WorkshopProtractor');
          await signInStepPage.goToAddressesMenu();
          await addressStepPage.goToShippingMenu();
        });

        describe('And chooses his default address', () => {
          beforeAll(async () => {
            await shippingStepPage.agreeTermsOfService();
            await shippingStepPage.goToPaymentMenu();
          });

          describe('And pays for his order', () => {
            beforeAll(async () => {
              await paymentStepPage.goToBankPaymentMenu();
              await bankPaymentStepPage.goToOrderMenu();  
            });
            
            it('Then, the order should be correct and completed', async () => {
              expect(await orderResumePage.getOrderStatus.getText())
              .toBe('Your order on My Store is complete.');
            });
          });    
        });
      });
    });
  });
});
