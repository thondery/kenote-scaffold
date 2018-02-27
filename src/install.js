
import path from 'path'
import fs from 'fs-extra'
import runscript from 'runscript'
import uuid from 'uuid'
import _ from 'lodash'

export default (repository) => {
  let is_repository = isRepository(repository)
  if (is_repository) {
    let git_dir = uuid.v4() 
    return runscript(`rm -rf ${git_dir} && git clone ${repository} ${git_dir} && rm -rf ${git_dir}/.git ${git_dir}/README.md ${git_dir}/LICENSE`)
      .then( ret => {
        fs.moveSync(git_dir, './')
        let pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
        _.unset(pkg, 'repository')
        _.unset(pkg, 'author')
        pkg.name = path.basename(process.cwd())
        fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf-8')
        return runscript(`yarn install`)
      })
  }
  else {
    //
  }
}

const isRepository = (repository) => {
  let isTrue = _.isString(repository)
  isTrue = /^(http|https):\/\//.test(repository)
  return isTrue
}