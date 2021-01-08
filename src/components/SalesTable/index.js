import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getSalesData } from "../../actions/salesActions";
import { CircularProgress, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 400,
    width: "80%",
  },
}));

const SalesTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sales = useSelector((state) => state.sales);
  const { salesData, loading } = sales;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "cliente", headerName: "Cliente", width: 130 },
    { field: "producto", headerName: "Producto", width: 130 },
    {
      field: "cantidad",
      headerName: "Cantidad",
      type: "number",
      width: 130,
    },
  ];

  useEffect(() => {
    dispatch(getSalesData());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {loading && <CircularProgress />}
      {salesData && (
        <>
          <Typography variant="h5">Ventas del mes actual</Typography>
          <DataGrid rows={salesData} columns={columns} pageSize={5} />
        </>
      )}
    </div>
  );
};

export default SalesTable;
