import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import PropTypes from 'prop-types'

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

const ImageModal = ({
  data: { webformatWidth, webformatURL, largeImageURL, tags, pageURL },
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const defaultWidth = webformatWidth

  return (
    <>
      <button className="shadow hover:shadow-lg p-0.5" onClick={handleOpen}>
        <img
          width={defaultWidth}
          src={webformatURL}
          alt={tags}
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
          <img width="1280" src={largeImageURL} alt={tags} loading="lazy" />
          <a href={pageURL}>Get information on that image</a>
        </Box>
      </Modal>
    </>
  )
}

ImageModal.propTypes = {
  data: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    pageURL: PropTypes.string,
    tags: PropTypes.string,
    webformatWidth: PropTypes.number,
  }),
}

export default ImageModal
