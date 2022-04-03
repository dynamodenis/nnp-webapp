// TRaining
export const canTrainingCreate = user => {
    if(user?.roles.length > 0 ){
      if(user?.roles[0]?.training_support?.includes('cancreate')){
        return true
      }else {
        return false
      }
    }
    return false
}

export const canTrainingView = user => {
    if(user?.roles.length > 0 ){
      if(user?.roles[0]?.training_support?.includes('canview')){
        return true
      }else {
        return false
      }
    }
    return false
}

export const canTrainingEdit = user => {
    if(user?.roles.length > 0 ){
      if(user?.roles[0]?.training_support?.includes('canedit')){
        return true
      }else {
        return false
      }
    }
    return false
}

export const canTrainingDelete = user => {
    if(user?.roles.length > 0 ){
      if(user?.roles[0]?.training_support?.includes('canedit')){
        return true
      }else {
        return false
      }
    }
    return false
}