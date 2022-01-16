import { FC } from "react";
import { useDispatch } from "react-redux";

import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Paper,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import RootRef from "@material-ui/core/RootRef";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
  DropResult,
} from "react-beautiful-dnd";

import { setComponents, removeComponent } from "src/features/app/appSlice";
import { AVAILABLE_MENU_LIST } from "../types";
import { mapMenuValueToMenuLabel } from "../utils";

interface Props {
  items: Array<AVAILABLE_MENU_LIST>;
  onSelect: (item: AVAILABLE_MENU_LIST) => void;
}

const reorder = (
  list: Array<AVAILABLE_MENU_LIST>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
) => ({
  ...draggableStyle,
  ...(isDragging && {
    background: "rgb(235,235,235)",
  }),
});

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightgray" : "#fff",
});

const DraggableOrderList: FC<Props> = ({ items, onSelect }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    dispatch(setComponents(reorderedItems));
  };

  const getListItemText = (idx: number, item: AVAILABLE_MENU_LIST) =>
    `${idx + 1}. ${mapMenuValueToMenuLabel(item)}`;

  return (
    <Paper style={{ marginTop: "24px", width: "100%" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <RootRef rootRef={provided.innerRef}>
              <List style={getListStyle(snapshot.isDraggingOver)}>
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        button
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided?.draggableProps?.style
                        )}
                        onClick={() => onSelect(item)}
                      >
                        <ListItemText primary={getListItemText(index, item)} />
                        <ListItemSecondaryAction>
                          <IconButton
                            color="secondary"
                            edge="end"
                            aria-label="delete"
                            onClick={() => dispatch(removeComponent(item))}
                          >
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
    </Paper>
  );
};

export default DraggableOrderList;
