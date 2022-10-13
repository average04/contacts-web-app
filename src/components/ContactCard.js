import "../styles/ContactCard.css";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PhoneInput from "react-phone-input-2";

import EditIcon from "@mui/icons-material/Edit";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { width } from "@mui/system";

const ContactCard = ({ Contact, Mode, Event }) => {
  var iconsx = { color: "white", cursor: "pointer" };
  const [disabled, SetDisabled] = useState(Mode === "show" ? true : false);
  const [name, SetName] = useState(Contact.name);
  const [numbers, SetNumbers] = useState(Contact.numbers);

  function handleDone() {
    if (Mode === "show") SetDisabled(!disabled);
    else {
      Event();
      console.log("here");
    }
  }

  return (
    <>
      <Card className="cc-card">
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "-5pt", marginLeft: "-7pt" }}
        >
          <Grid item xs={10} md={10} sx={{ display: "flex" }}>
            <div style={{ marginTop: "4pt" }}>
              {Mode === "show" ? (
                Contact.isStarred ? (
                  <StarIcon sx={iconsx} />
                ) : (
                  <StarBorderIcon sx={iconsx} />
                )
              ) : (
                <></>
              )}
            </div>
            <Typography gutterBottom variant="h5" component="div">
              <input
                className="cc-hidden-input"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                disabled={disabled}
              />
            </Typography>
          </Grid>
          <Grid item xs={2} md={2}>
            {disabled ? (
              <div style={{ display: "flex", marginLeft: "-30pt" }}>
                <div>
                  <DeleteIcon sx={iconsx} />
                </div>
                <div onClick={() => SetDisabled(!disabled)}>
                  <EditIcon sx={iconsx} />
                </div>
                <div>
                  <AddIcon sx={iconsx} />
                </div>
              </div>
            ) : (
              <div onClick={handleDone} style={{ marginLeft: "-20pt" }}>
                <DoneOutlineIcon sx={iconsx} />
              </div>
            )}
          </Grid>
          <Grid xs={10} md={10}>
            {/* <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="cc-hidden-input"
              value={number}
              onChange={(e) => SetNumber(e.target.value)}
              disabled={disabled}
            /> */}
            {numbers.map((num) => (
              <div style={{ marginLeft: "20pt", marginBottom: "10pt" }}>
                <PhoneInput
                  //   className="cc-hidden-input"
                  inputProps={{
                    required: true,
                    style: {
                      width: "90%",
                      fontFamily: "Josefin Sans",
                      fontSize: "15pt",
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                  disableDropdown={true}
                  country="ph"
                  value={num}
                  onChange={(e) => (num = e)}
                  disabled={disabled}
                />
              </div>
            ))}
          </Grid>
          <Grid item xs={2} md={2}></Grid>
        </Grid>
      </Card>
      {/* <div className="cc-card">BOX</div> */}
    </>
  );
};
export default ContactCard;
