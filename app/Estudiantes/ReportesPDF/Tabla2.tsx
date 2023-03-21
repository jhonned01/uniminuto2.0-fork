"use client";
import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  StyleSheet,
  Document,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  table: {
    display: "table" as any,
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: "1%",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    padding: "3%",
  },
});

const data = [
  {
    mod: "Comunicación Escrita",
    desemp: "4",
    carct:
      "•Muestran diferentes perspectivas sobre el tema, complican el planteamiento y permiten cumplir satisfactoriamente con el propósito comunicativo propuesto en la pregunta",
  },
  {
    mod: "Inglés",
    desemp: "B1",
    carct:
      "•El estudiante es capaz de comprender los puntos principales de textos claros y en lengua estándar, si tratan cuestiones que le son conocidas, ya sea en situaciones de trabajo, de estudio o de ocio",
  },
];

const Tabla2 = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {/* <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Product</Text>
        </View> */}
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>MÓDULOS POR COMPETENCIA</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>NIVEL DE DESEMPEÑO</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>CARACTERISTICAS</Text>
        </View>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          {/* <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.product}</Text>
          </View> */}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.mod}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.desemp}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.carct}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Tabla2;
