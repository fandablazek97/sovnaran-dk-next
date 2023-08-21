export default function Contact() {
    return (
      <div id="contact" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Feel free to reach out to us whenever you are ready. We are here to assist you on your journey. If you have any questions or need guidance, do not hesitate to contact us. Your adventure awaits!
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">

                {/* 1 */}
                <div className="rounded-2xl bg-gray-200/50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900 pb-4">ChinaHead Office:</h3>
                  <p className="text-sm text-gray-600">ZHANGJIAGANG KING PLASTICS CO., LTD | 1701, Huajian Bldg, Shazhou Road(W), Zhangjiagang | China</p>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-gray-600">
                    Tel.0086(512)58988009 | Fax 0086(512)58988018 | E-Mail: jed@fondi.com.cn | Internet: www.jimpa.dk
                  </div>
                </div>

                {/* 2 */}
                <div className="rounded-2xl bg-gray-200/50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900 pb-4">Danmark Branch:</h3>
                    <p className="text-sm text-gray-600">MIH store Aps | Marius Pedersens Vej 26 | 4300 Holbæk | Danmark</p>
                    <div className="mt-3 space-y-3 text-sm leading-6 text-gray-600">
                    Tel. 0045-81716171 | E-Mail:info@mih-store.com
                    </div>
                </div>

                {/* 3 */}
                <div className="rounded-2xl bg-gray-200/50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900 pb-4">East Euporen Branch:</h3>
                    <p className="text-sm text-gray-600">R.P.I. REAL spol. s r.o| Sokolovská 1007 | 33441 Dobřany|Czech Repbli</p>
                    <div className="mt-3 space-y-3 text-sm leading-6 text-gray-600">
                    Tel. 0420-777104443 | E-Mail:info@bolta.cz
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  