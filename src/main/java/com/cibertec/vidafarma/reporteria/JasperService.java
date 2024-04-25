package com.cibertec.vidafarma.reporteria;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.util.JRSaver;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JasperService<T> {

    public byte[] getItemReport(List<T> items, String format, String tabla) {

        JasperReport jasperReport;

        try {
            jasperReport = (JasperReport) JRLoader.loadObject(
                    ResourceUtils.getFile(tabla+".jasper"));
        } catch (FileNotFoundException | JRException e) {
            try {
                File file = ResourceUtils.getFile("classpath:reportes/"+tabla+".jrxml");
                jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
                JRSaver.saveObject(jasperReport, tabla+".jasper");
            } catch (FileNotFoundException | JRException ex) {
                throw new RuntimeException(ex);
            }
        }
        
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(items);
        Map<String, Object> parameters = new HashMap<>();
        
        JasperPrint jasperPrint = null;
        byte[] reportContent;

        try {
            jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
            switch (format) {
                case "pdf" ->
                    reportContent = JasperExportManager.exportReportToPdf(jasperPrint);
                case "xml" ->
                    reportContent = JasperExportManager.exportReportToXml(jasperPrint).getBytes();
                default ->
                    throw new RuntimeException("Unknown report format");
            }
        } catch (JRException e) {
            throw new RuntimeException(e);
        }
        return reportContent;
    }
}

