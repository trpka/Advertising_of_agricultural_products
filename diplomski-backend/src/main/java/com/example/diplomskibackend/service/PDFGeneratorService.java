package com.example.diplomskibackend.service;

import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.Purchase;
import org.springframework.stereotype.Service;

import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class PDFGeneratorService {

     @Autowired
     private AnnouncementService announcementService;

     public String export(Purchase purchase) throws IOException {
          Document document = new Document(PageSize.A4);
          DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd hh mm ss");
          String currentDateTime = dateFormatter.format(new Date());
          String file_name = "pdf_" + currentDateTime + ".pdf";
          PdfWriter.getInstance(document, new FileOutputStream("C:\\Users\\Vladimir\\Desktop\\PDF potvrda\\" + file_name));

          document.open();
          Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
          fontTitle.setSize(18);

          Paragraph paragraph = new Paragraph("Kupljeni proizvodi", fontTitle);
          paragraph.setAlignment(Paragraph.ALIGN_CENTER);
          document.add(paragraph);


          Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
          fontParagraph.setSize(12);

          Font fontParagraphBold = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
          fontParagraphBold.setSize(12);

          Paragraph paragraph6 = new Paragraph("Datum kupovine: "+purchase.getDate().toString().substring(0,10), fontParagraph);
          paragraph6.setAlignment(Element.ALIGN_CENTER);
          document.add(paragraph6);

          for (Product p : purchase.getProducts()) {
               Announcement announcement = this.announcementService.findById(p.getId());
               Paragraph paragraph2 = new Paragraph("\nProizvod: " + p.getName(), fontParagraph);
               paragraph2.setAlignment(Element.ALIGN_CENTER);
               Paragraph paragraph3 = new Paragraph("Cena: " + announcement.getPrice() +  " rsd", fontParagraph);
               paragraph3.setAlignment(Element.ALIGN_CENTER);
               Paragraph paragraph4 = new Paragraph("Grad: " + announcement.getCity() , fontParagraph);
               paragraph4.setAlignment(Element.ALIGN_CENTER);
               Paragraph paragraph5 = new Paragraph("Broj telefona prodavca: " + announcement.getMobileNumber() , fontParagraph);
               paragraph5.setAlignment(Element.ALIGN_CENTER);
               Paragraph paragraph7 = new Paragraph("-------------------------------------------------------------------------------------------------"  , fontParagraph);
               paragraph7.setAlignment(Element.ALIGN_CENTER);

               String path = p.getPicture();
               String[] parts = path.split("/");

               System.out.print(parts[0] + parts[1] + parts[2]);

               Image i=Image.getInstance("C:\\Users\\Vladimir\\Desktop\\diplomski_rad\\Advertising_of_agricultural_products\\diplomski-frontend\\src\\assets\\" + parts[2] + "\\" + parts[3]);
               i.scaleToFit(250,150);
               i.setAlignment(Image.MIDDLE);

               document.add(paragraph2);
               document.add(paragraph3);
               document.add(paragraph4);
               document.add(paragraph5);
               document.add(i);
               document.add(paragraph7);

          }

        /*
        Paragraph paragraph4 = new Paragraph("Street: "+a.getApartment().getHouse().getAddress().getStreet(), fontParagraph);
        paragraph4.setAlignment(Element.ALIGN_CENTER);
        Paragraph paragraph5 = new Paragraph("Number of persons: "+a.getApartment().getNumOfPerson(), fontParagraph);
        paragraph5.setAlignment(Element.ALIGN_CENTER);
        Paragraph paragraph6 = new Paragraph("Start of reservation: "+a.getReservationStart().toString().substring(0,10), fontParagraph);
        paragraph6.setAlignment(Element.ALIGN_CENTER);
        Paragraph paragraph7 = new Paragraph("End of reservation: "+a.getReservationEnd().toString().substring(0,10), fontParagraph);
        paragraph7.setAlignment(Element.ALIGN_CENTER);*/


//        Paragraph paragraph12= new Paragraph("Whole price: "+a.getPrice()+"$\n\n", fontParagraph);
//        paragraph12.setAlignment(Element.ALIGN_CENTER);
          Paragraph paragraph11 = new Paragraph("Vaša kupovina je poslata na ovu adresu.", fontParagraph);
          paragraph11.setAlignment(Element.ALIGN_CENTER);
          Paragraph paragraph9 = new Paragraph("Grad : " + purchase.getCity() , fontParagraph);
          paragraph9.setAlignment(Element.ALIGN_CENTER);
          Paragraph paragraph10 = new Paragraph("Adresa : " + purchase.getAddress() , fontParagraph);
          paragraph10.setAlignment(Element.ALIGN_CENTER);
          Paragraph paragraph8 = new Paragraph("Ukupna cena: " + purchase.getTotalPrice() + " rsd", fontParagraphBold);
          paragraph8.setAlignment(Element.ALIGN_CENTER);
        /*Paragraph paragraph9 = new Paragraph("\nFirst and last name: "+a.getClient().getFirstName()+" "+a.getClient().getLastName()+
                "\nMobile: "+a.getClient().getMobile()+"\nEmail: "+a.getClient().getEmail()+"\n\n", fontParagraph);
        paragraph9.setAlignment(Paragraph.ALIGN_CENTER);
        Paragraph paragraph10 = new Paragraph("Information owner",fontParagraphBold);
        paragraph10.setAlignment(Element.ALIGN_CENTER);
        Paragraph paragraph11 = new Paragraph("\nFirst and last name: "+a.getApartment().getHouse().getOwner().getFirstName()+" "+a.getApartment().getHouse().getOwner().getLastName()+
                "\nMobile: "+a.getApartment().getHouse().getOwner().getMobile()+"\nEmail: "+a.getApartment().getHouse().getOwner().getEmail()+"\n\n", fontParagraph);
        paragraph11.setAlignment(Element.ALIGN_CENTER);*/




       /* document.add(paragraph4);
        document.add(paragraph6);
        document.add(paragraph7);


        document.add(paragraph12);

        document.add(paragraph9);
        document.add(paragraph10);
        document.add(paragraph11);*/

          document.add(paragraph11);
          document.add(paragraph9);
          document.add(paragraph10);
          document.add(paragraph8);
          document.close();
          return file_name;

     }
}
