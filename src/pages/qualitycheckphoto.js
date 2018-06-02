import React, { Component } from 'react'
import BeforeAfterSlider from 'react-before-after-slider'
 
export default React.createClass ({
  displayName: 'QualityCheckPhoto',

  render () {
    const before = 'https://farm5.staticflickr.com/4365/36197804414_f091351172_h.jpg'
    const after = 'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-SCfBzc6/0/1579225d/X2/i-SCfBzc6-X2.jpg'
 
    return (
      <BeforeAfterSlider
        before={before}
        after={after}
        width={720}
        height={480}
      />
    )
  }
})
