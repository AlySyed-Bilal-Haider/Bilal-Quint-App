import React from "react";
import { makeStyles } from "@mui/styles";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
import Loading from "../loading";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  metaMaskUpperLayer: {
    width: "367px",
    height: "95px",
    border: "4px solid #ffffff",
    background: "#20c997",
    borderRadius: "50px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px 10px",
    paddingRight: "30px",
    paddingLeft: "30px",
    cursor: "pointer",
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17.69pt",
    color: "#ffffff",
  },
}));
function UnstakeModal({
  open,
  setOpen,
  withdrawTokenHandler,
  withdrawLpHandler,
  index,
  loading,
}) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="modal__main__container">
        <Dialog
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Loading loading={loading} />

            <Box component="h3" fontSize="30px">
              <span style={{ color: "red" }}> Warning!</span> Please note that
              you will get no reward if you unstake early.
            </Box>
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              p={1}
            >
              <Box onClick={handleClose}>
                <button
                  style={{
                    background: "#20c997",
                    borderRadius: "14px",
                    color: "white",
                    padding: "10px 40px",
                    fontSize: "18px",
                    border: "none",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </Box>
              <Box>
                <button
                  style={{
                    background: "#20c997",
                    borderRadius: "14px",
                    color: "white",
                    padding: "10px 40px",
                    fontSize: "18px",
                    border: "none",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    index === 0 ? withdrawTokenHandler() : withdrawLpHandler()
                  }
                >
                  UnStake
                </button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default UnstakeModal;
