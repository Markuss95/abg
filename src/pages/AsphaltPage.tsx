import styled from "styled-components";
import Footer from "../components/Footer";
import { useMemo } from "react";
import { Box, Button } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import infratestPhoto from "../assets/infratest.jpg";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
type Testings = {
  materials: string;
  property: string;
  test_method: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Testings[] = [
  {
    materials: "Bitumenske mješavine",
    property: "Topivi udio veziva",
    test_method: "HRN EN 12697-1:2020 (EN 12697-1:2020)",
  },
  {
    materials: "Bitumenske mješavine",
    property: "Određivanje granulometrijskog sastava",
    test_method: "HRN EN 12697-2:2019 (EN 12697-2:2015 + A1:2019)",
  },
  {
    materials: "Bitumenske mješavine",
    property: "Određivanje gustoće asfaltne mješavine - otapalom",
    test_method: "HRN EN 12697-5:2019 (EN 12697-5:2018) Postupak A",
  },
  {
    materials: "Bitumenske mješavine",
    property: "Određivanje gustoće asfaltnih uzoraka",
    test_method: "HRN EN 12697-6:2020 (EN 12697-6:2020) Točka 9.3 Postupak B",
  },
  {
    materials: "Bitumenske mješavine",
    property: "Određivanje šupljina u asfaltnim uzorcima",
    test_method: "HRN EN 12697-8:2019 (EN 12697-8:2018) Točka 4",
  },
  {
    materials: "Bitumenske mješavine",
    property:
      "Ispitne metode za asfalt proizveden vrućim postupkom - Uzorkovanje",
    test_method: "HRN EN 12697-27:2017 (EN 12697-27:2017) Točke 4.1, 4.3, 4.7",
  },
  {
    materials: "Bitumenske mješavine",
    property:
      "Priprema uzorka za određivanje udjela veziva, udjela vode i granulometrijskog sastava",
    test_method: "HRN EN 12697-28:2020 (EN 12697-28:2020)",
  },
  {
    materials: "Bitumenske mješavine",
    property: "Priprema uzorka udarnim zbijačem",
    test_method: "HRN EN 12697-30:2019 (EN 12697-30:2018) Izuzev točke 5.2",
  },
  {
    materials: "Bitumen i bitumenska veziva",
    property: "Određivanje točke razmekšanja postupkom prstena i kuglice",
    test_method: "HRN EN 1427:2015 (EN 1427:2015)",
  },
];

const AsphaltPage = () => {
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
          src={infratestPhoto}
          alt="backgroundPhoto"
          className="infratestImage"
        />
        <MaterialReactTable
          columns={columns}
          data={data}
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
  background-color: white;
  .infratestImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;

export default AsphaltPage;
