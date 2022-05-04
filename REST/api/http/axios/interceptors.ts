export function responseInterceptorsCatch(error: any) {
  const { response } = error || {}
  const msg: string = response?.data?.message ?? ''

  checkStatus(error?.response?.status, msg)
  return Promise.reject(error)
}

function checkStatus(status: number, msg: string) {
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = msg
      break
    case 401:
      errMessage = msg || 'Требуется авторизация!'
      localStorage.removeItem('token')
      document.location = '/login'
      break
    case 403:
      errMessage = 'Запрещено!'
      break
    case 404:
      errMessage = 'Сервер не может найти запрашиваемый ресурс!'
      break
    case 405:
      errMessage = 'Метод не разрешён!'
      break
    case 408:
      errMessage = 'Истекло время ожидания сетевого запроса!'
      break
    case 422:
      errMessage = msg || 'Не удалось обработать инструкцию!'
      break
    case 500:
      errMessage = 'Неизвестная ошибка сервера!'
      break
    case 501:
      errMessage =
        'Метод запроса не поддерживается сервером и не может быть обработан!'
      break
    case 502:
      errMessage = 'Сетевая ошибка!'
      break
    case 503:
      errMessage = 'Сервис недоступен!'
      break
    case 504:
      errMessage = 'Время ожидания ответа истекло!'
      break
    default:
  }

  if (errMessage) {
    alert(errMessage)
  }
}
