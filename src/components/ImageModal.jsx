import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  'text-align': 'center',
  transform: 'translate(-50%, -50%);',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
}

const ImageModal = ({ data }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const defaultWidth = data.webformatWidth

  return (
    <>
      <button className="shadow hover:shadow-lg p-0.5" onClick={handleOpen}>
        <img
          width={defaultWidth}
          src={data.webformatURL}
          alt={data.tags}
          loading="lazy"
        />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-image"
        aria-describedby="modal-display-image-on-clicking"
      >
        <Box sx={style}>
          <img
            width="1280"
            src={data.largeImageURL}
            alt={data.tags}
            loading="lazy"
          />
          <a href={data.pageURL}>Get information on that image</a>
        </Box>
      </Modal>
    </>
  )
}

export default ImageModal
