import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Article } from "../data/articles";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

interface TransitionsModalProps {
    article: Article;
    open: boolean;
    handleClose: () => void;
}

function TransitionsModal({
    article,
    open,
    handleClose,
}: TransitionsModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            ...style,
                            width: {
                                xs: "90%",
                                sm: "80%",
                                md: "70%",
                                lg: "50%",
                            },
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                    >
                        <Typography
                            id="transition-modal-title"
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            {article.title}
                        </Typography>
                        <Typography
                            dangerouslySetInnerHTML={{ __html: article.body }}
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal;
