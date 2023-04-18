const statusConfig = status => {
  const statusStates = {
    isIdle: true,
    isLoading: false,
    isError: false,
    isResolved: false,
  };

  if (status === 'idle') {
    return statusStates;
  }

  if (status === 'loading') {
    return {
    ...statusStates,
    isIdle: false,
    isLoading: true,
    };
  }

  if (status === 'error') {
    return {
      ...statusStates,
      isIdle: false,
      isError: true,
    };
  }

  if (status === 'resolved') {
    return {
      ...statusStates,
      isIdle: false,
      isResolved: true,
    };
  }

  // Возвращаем значения по умолчанию или выбираем одно из ожидаемых значений
  // в качестве значения по умолчанию
  return {
    ...statusStates,
    isIdle: true,
  };
};

export default statusConfig;
