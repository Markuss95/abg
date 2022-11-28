import styled from "styled-components";
import Footer from "../components/Footer";
import { useMemo } from "react";
import { Box, Button } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import concreteImage from "../assets/beton_slika-min - Copy.jpg";

type Testings = {
  materials: string;
  property: string;
  test_method: string;
};
const data: Testings[] = [
  {
    materials: "Svježi beton",
    property: "Uzorkovanje",
    test_method: "HRN EN 12350-1:2019 (EN 12350-1:2019)",
  },
  {
    materials: "Svježi beton",
    property: "Ispitivanje slijeganjem",
    test_method: "HRN EN 12350-2:2019 (EN 12350-2:2019)",
  },
  {
    materials: "Svježi beton",
    property: "Određivanje sadržaja pora tlačnim metodama",
    test_method: "HRN EN 12350-7:2019 (EN 12350-7:2019) Točka 6",
  },
  {
    materials: "Očvrsli beton",
    property: "Oblik, dimenzije i drugi zahtjevi za uzorke i kalupe",
    test_method: "HRN EN 12390-1:2021 (EN 12390-1:2021)",
  },
  {
    materials: "Očvrsli beton",
    property: "Izrada i njega uzoraka za ispitivanje čvrstoće",
    test_method: "HRN EN 12390-2:2019 (EN 12390-2:2019)",
  },
  {
    materials: "Očvrsli beton",
    property: "Određivanje tlačne čvrstoće. Raspon 200 - 2000kN",
    test_method: "HRN EN 12390-3:2019 (EN 12390-3:2019)",
  },
  {
    materials: "Očvrsli beton",
    property: "Određivanje gustoće",
    test_method:
      "HRN EN 12390-7-2019 (EN 12390-7-2019) HRN EN 12390-7:2019/Ispr.1:2020 (EN 12390-7:2019/AC:2020)",
  },
  {
    materials: "Očvrsli beton",
    property: "Dubina prodiranja vode pod tlakon",
    test_method: "HRN EN 12390-8:2019 (EN 12390-8:2019)",
  },
];
const ConcretePage = () => {
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
          src={concreteImage}
          alt="backgroundPhoto"
          className="concreteImage"
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
  .concreteImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;
export default ConcretePage;
