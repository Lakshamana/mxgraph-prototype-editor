const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

/**
 * Used to prepare mxgraph assets (such like /config/* or /images/*)
 * for production deployment.
 * @param mxAssetsPath (string) mxgraph editor
 * assets (config and/or image files)
 * @param output (string) directtory under
 * /dist in which those files will be stored
 */
function prepare(mxAssetsPath, output) {
  const config = 'config'
  const images = 'images'
  const resolvedMxPath = path.resolve(__dirname, mxAssetsPath)
  if (fs.existsSync(resolvedMxPath)) {
    const configBasePath = path.join(resolvedMxPath, config)
    const imagesBasePath = path.join(resolvedMxPath, images)

    const out = path.resolve(`dist/${output}`)
    fs.mkdirSync(out)
    if (fs.existsSync(configBasePath)) {
      fse.copySync(configBasePath, path.join(out, config))
    } else {
      console.info(`Directory: ${configBasePath} not found. Skipping...`)
    }

    if (fs.existsSync(imagesBasePath)) {
      fse.copySync(imagesBasePath, path.join(out, images))
    } else {
      console.info(`Directory: ${imagesBasePath} not found. Skipping...`)
    }
  } else {
    console.error(`Directory: ${mxAssetsPath} not found. Aborting.`)
  }
}

const mxAssetsPath = 'src/static/examples/editors'
const output = 'mxassets'
prepare(mxAssetsPath, output)
