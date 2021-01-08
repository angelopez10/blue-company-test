import React, { useEffect, useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import StarIcon from "@material-ui/icons/Star";
import TableChartIcon from "@material-ui/icons/TableChart";
import clsx from "clsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 240,

    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 240,
    marginTop: "60px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menuData = [
  { id: 1, name: "Grafico de Barras", url: "/" },
  { id: 2, name: "Ventas por Producto", url: "/products" },
  { id: 3, name: "Favoritos", url: "/favorites" },
  { id: 4, name: "Ventas Mensuales", url: "/sales" },
];

let menuFromLocal = localStorage.getItem("menuLS");
console.log(menuFromLocal);

const Sidebar = () => {
  const [menu, updateMenu] = useState(menuData);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (menuFromLocal) updateMenu(JSON.parse(menuFromLocal));
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(menu);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateMenu(items);
    console.log(items);
    localStorage.setItem("menuLS", JSON.stringify(items));
  }

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerOpen)}
        classes={{
          paper: classes.drawerOpen,
        }}
      >
        <Divider />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="menu">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {menu &&
                  menu.map((item, index) => {
                    console.log(item);
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.name}
                        index={index}
                      >
                        {(provided) => (
                          <ListItem
                            button
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => history.push(item.url)}
                          >
                            <ListItemText primary={item.name} />
                            <ListItemIcon>
                              {item.name === "Grafico de Barras" ? (
                                <BarChartIcon />
                              ) : item.name === "Ventas por Producto" ? (
                                <PieChartIcon />
                              ) : item.name === "Favoritos" ? (
                                <StarIcon />
                              ) : (
                                <TableChartIcon />
                              )}
                            </ListItemIcon>
                          </ListItem>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Drawer>
    </>
  );
};

export default Sidebar;
