"use client"

const CategorySelector = ({currentCategory, onSelectCategory}) => {
    const categories = [
        {id: "general", name: "Tổng hợp"},
        {id: "business", name: "Kinh doanh"},
        {id: "entertainment", name: "Giải trí"},
        {id: "health", name: "Sức khỏe"},
        {id: "science", name: "Khoa học"},
        {id: "sports", name: "Thể thao"},
        {id: "technology", name: "Công nghệ"},
    ]

    return (
        <div className="category-selector">
            <h2 className="sr-only">Chuyên Mục Tin Tức</h2>
            <div className="categories-list">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`category-button ${currentCategory === category.id ? "active" : ""}`}
                        aria-pressed={currentCategory === category.id}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <p className="voice-tip">Mẹo: Nói "chuyên mục [tên]" để thay đổi chuyên mục bằng giọng nói</p>
        </div>
    )
}

export default CategorySelector
