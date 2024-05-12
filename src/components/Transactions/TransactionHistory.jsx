import css from "./Transactions.module.css"
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr className={css.header}>
                    <th className={`${css.item} ${css.title}`}>Type</th>
                    <th className={`${css.item} ${css.title}`}>Amount</th>
                    <th className={`${css.item} ${css.title}`}>Currency</th>
                </tr>
            </thead>
            <tbody > 
            {items.map((item) => {
                return  <tr key={item.id} className={css.list}>
                        <td className={`${css.item} ${css.scroll}`}>{item.type}</td>
                        <td className={`${css.item} ${css.scroll}`}>{item.amount}</td>
                        <td className={`${css.item} ${css.scroll}`}>{item.currency}</td>
                    </tr>
                   })}
                </tbody>
        </table>
    );
    
};
export default TransactionHistory