import axios from "axios";

const Invoice_BASE_REST_API_URL = "http://localhost:44364/invoiceheader";

class InvoiceService {
  getAllInvoices() {
    return axios.get(Invoice_BASE_REST_API_URL);
  }

  createInvoice(Invoice) {
    return axios.post(Invoice_BASE_REST_API_URL, Invoice);
  }

  getInvoiceById(InvoiceId) {
    return axios.get(Invoice_BASE_REST_API_URL + "/" + InvoiceId);
  }

  getInvoicesById(InvoiceId) {
    return axios.get(Invoice_BASE_REST_API_URL + "s/" + InvoiceId);
  }

  updateInvoice(InvoiceId, Invoice) {
    return axios.put(
      Invoice_BASE_REST_API_URL + "/" + InvoiceId,
      Invoice
    );
  }

  deleteInvoice(InvoiceId) {
    return axios.delete(
      Invoice_BASE_REST_API_URL + "/" + InvoiceId
    );
  }
}

export default new InvoiceService();