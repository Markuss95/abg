import styled from "styled-components";
import { useMemo } from "react";
import { Box, Button } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import examinationPhoto from "../assets/examinations.jpg";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Footer from "../components/Footer";

type Testings = {
  materials: string;
  property: string;
  test_method: string;
};

const data: Testings[] = [
  {
    materials: "Podloge za izgradnju prometnica",
    property: "Određivanje modula stišljivosti metodom kružne ploče",
    test_method: "HRN U.B1.046:1968",
  },
  {
    materials: "Nevezane i hidrauličkim vezivom vezane mješavine",
    property: "Mjerenje dinamičkog deformacijskog modula ugrađenih mješavina",
    test_method: "TSC 06.720:2003, (točka 4.2.3., 5.2.2.2., 5.2.3.2., 6.2.2)",
  },
  {
    materials: "Nevezane i hidrauličkim vezivom vezane mješavine",
    property:
      "Određivanje gustoće tla - Terensko ispitivanje - Metoda s gumenim balonom",
    test_method: "DIN 19125-2:2011 Točka 7.4",
  },
  {
    materials: "Nevezane i hidrauličkim vezivom vezane mješavine",
    property:
      "Određivanje laboratorijske referencijske gustoće i udjela vode zbijanjem po Proctoru",
    test_method:
      "HRN EN 13286-2:2010 (EN 13286-2:2010) HRN EN 13286-2:2010 / Ispr.1:2013 (EN 13286-2:2010/AC:2012)",
  },
  {
    materials: "Nevezane i hidrauličkim vezivom vezane mješavine",
    property:
      "Određivanje tlačne čvrstoće hidrauličnim vezivom vezanih mješavina",
    test_method: "HRN EN 13286-41:2021 (EN 13286-41:2021)",
  },
  {
    materials: "Tlo",
    property:
      "Određivanje prostorne mase sitnozrnih tla metodom linearnog mjerenja",
    test_method:
      "HRN EN ISO 17892-2:2015 (ISO 17892-2:2014; EN ISO 17892-2:2014",
  },
];
const ExaminationPage = () => {
  const columns = useMemo<MRT_ColumnDef<Testings>[]>(
    () => [
      {
        accessorKey: "materials", //access nested data with dot notation
        header: "Materijali/Proizvodi",
      },
      {
        accessorKey: "property", //access nested data with dot notation
        header: "Vrsta ispitivanja/Svojstvo",
      },
      {
        accessorKey: "test_method", //access nested data with dot notation
        header: "Metoda ispitivanja",
      },
    ],
    []
  );
  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };
  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };
  const csvExporter = new ExportToCsv(csvOptions);
  return (
    <>
      <Wrapper>
        <img
          src={examinationPhoto}
          alt="backgroundPhoto"
          className="examinationImage"
        />
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          renderTopToolbarCustomActions={({ table }) => (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                p: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <Button
                color="primary"
                //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                onClick={handleExportData}
                startIcon={<FileDownloadIcon />}
                variant="contained"
              >
                Izvezi tablicu u excel obliku
              </Button>
            </Box>
          )}
          localization={{
            clearSearch: "Očisti pretragu",
            filterByColumn: "",
            hideAll: "Sakrij sve",
            of: "od",
            rowsPerPage: "Redova po stranici",
            showAll: "Prikaži sve",
            showHideSearch: "Prikaži/sakrij pretragu",
            showHideFilters: "Prikaži/sakrij filtere",
            showHideColumns: "Prikaži/sakrij stupce",
            search: "Pretraga",
            toggleDensity: "Skupi redove",
            toggleFullScreen: "Puni zaslon",
            unsorted: "Nije sortirano",
            sortedByColumnAsc: "",
            sortedByColumnDesc: "",
            toggleVisibility: "Prikaži / Sakrij",
          }}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  font-family: "Regular";
  line-height: 0;
  .examinationImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;

export default ExaminationPage;
