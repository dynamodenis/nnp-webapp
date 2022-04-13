// TRaining
export const canTrainingCreate = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.training_support?.includes("cancreate")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canTrainingView = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.training_support?.includes("canview")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canTrainingEdit = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.training_support?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canTrainingDelete = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.training_support?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

// Services and marketplace
export const canMarketplaceCreate = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.services_marketplace?.includes("cancreate")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canMarketplaceView = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.services_marketplace?.includes("canview")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canMarketplaceEdit = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.services_marketplace?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canMarketplaceDelete = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.services_marketplace?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

// Research and innovaton
export const canResearchCreate = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.research_consultancy_innovation?.includes("cancreate")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canResearchView = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.research_consultancy_innovation?.includes("canview")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canResearchEdit = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.research_consultancy_innovation?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canResearchDelete = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.research_consultancy_innovation?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

// User
export const canUsersCreate = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.users?.includes("cancreate")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canUsersView = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.users?.includes("canview")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canUsersEdit = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.users?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

export const canUsersDelete = user => {
  if (user) {
    if (user?.roles.length > 0) {
      if (user?.roles[0]?.users?.includes("canedit")) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};
