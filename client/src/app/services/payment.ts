import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { CartProduct } from "../pages/cart/slice";

const initiatePayment = async () => {
  return true;
};

const printCheck = async (products: CartProduct[], ticket: string) => {
  const docDefinition = {
    content: [
      `Номер заказа: ${ticket}`,
      "Товары:",
      {
        ol: products.map(
          (product) => `${product.product.name}: ${product.count}`
        ),
      },
      `Сумма: ${products
        .reduce((sum, slice) => sum + slice.product.price * slice.count, 0)
        .toFixed(2)}`,
    ],
  };
  //@ts-ignore
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const newWindow = window.open("", "_blank");
  pdfMake.createPdf(docDefinition).open({}, newWindow);
};

export { initiatePayment, printCheck };
