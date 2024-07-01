
const ToastAlert = () => {
    console.log("Inside Toast Alert compnt")
  return (
    <div>
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">API DATA - AXIOS</strong>
                    <small>1 min ago</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
    </div>
  )
}

export default ToastAlert