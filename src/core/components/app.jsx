import React from "react"
import PropTypes from "prop-types"
import { IntlProvider,addLocaleData} from "react-intl"
import zh_CN from "../../lang/zh-CN.js"
import zh from "react-intl/locale-data/zh"

addLocaleData([...zh])

export default class App extends React.Component {

  getLayout() {
    let { getComponent, layoutSelectors } = this.props
    const layoutName = layoutSelectors.current()
    const Component = getComponent(layoutName, true)
    return Component ? Component : ()=> <h1> No layout defined for &quot;{layoutName}&quot; </h1>
  }

  render() {
    const Layout = this.getLayout()

    return (
      <IntlProvider locale={"zh"} messages={zh_CN}>
        <Layout/>
      </IntlProvider>
    )
  }
}

App.propTypes = {
  getComponent: PropTypes.func.isRequired,
  layoutSelectors: PropTypes.object.isRequired,
}

App.defaultProps = {
}
